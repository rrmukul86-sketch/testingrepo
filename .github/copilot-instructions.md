# Python Project - AI Coding Agent Guidelines

## Project Overview
This is a Python project at an early stage of development. The workspace currently contains a single `first_code.py` module with an open implementation canvas.

## Architecture & Structure
- **Entry Point**: [first_code.py](../first_code.py) - Primary module for project logic
- **Workspace Pattern**: Single-file structure (will expand to multi-module as complexity grows)

## Code Style & Conventions
- **Language**: Python 3.x
- **Format**: Follow PEP 8 standards
- **Naming**: 
  - Functions/variables: `snake_case`
  - Classes: `PascalCase`
  - Constants: `UPPER_SNAKE_CASE`

## Development Workflow
When contributing to this project:
1. **Understand Intent**: Ask for clarification on project goals before implementing
2. **Incremental Development**: Build features in testable units
3. **Comments**: Document non-obvious logic, especially for algorithms or business logic
4. **Testing**: Create simple test cases when adding functionality

## Key Patterns to Apply
- Modular function design: Keep functions single-purpose
- Error handling: Use try-except blocks for user input and external operations
- Documentation: Add docstrings to functions explaining purpose, parameters, and return values

## Common Tasks
- **Running code**: `python first_code.py`
- **Testing manually**: Add main-guard pattern for direct script execution: `if __name__ == "__main__":`

## Next Steps for Growth
As this project expands:
- Organize code into directories (e.g., `src/`, `tests/`, `utils/`)
- Add `requirements.txt` or `pyproject.toml` for dependencies
- Create README.md with project purpose and setup instructions
- Establish consistent testing structure

---
*Generated for early-stage Python project. Update as architectural patterns emerge.*
