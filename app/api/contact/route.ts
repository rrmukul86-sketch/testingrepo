import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type ContactSubmission = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
};

const storageDirectory = path.join(process.cwd(), "data");
const storagePath = path.join(storageDirectory, "contact-submissions.json");

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readExistingSubmissions() {
  try {
    const file = await readFile(storagePath, "utf8");
    const parsed = JSON.parse(file) as ContactSubmission[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: cleanValue(body.name),
      company: cleanValue(body.company),
      email: cleanValue(body.email),
      phone: cleanValue(body.phone),
      message: cleanValue(body.message),
      submittedAt: new Date().toISOString()
    };

    if (!submission.name || !submission.email || !submission.message) {
      return NextResponse.json(
        { message: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(submission.email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    await mkdir(storageDirectory, { recursive: true });
    const existingSubmissions = await readExistingSubmissions();
    existingSubmissions.push(submission);

    await writeFile(storagePath, JSON.stringify(existingSubmissions, null, 2), "utf8");

    return NextResponse.json({
      message: "Thanks, your inquiry has been saved successfully."
    });
  } catch {
    return NextResponse.json(
      { message: "The server could not process your inquiry. Please try again." },
      { status: 500 }
    );
  }
}
