# CLI Plus Library Template
 
This repository demonstrates a CLI and library setup with TypeScript, plus an Astro UI example.

## Usage

- **CLI:**  
  Build and run:
  ```sh
  pnpm i
  pnpm build
  npx mycmd "Hello from CLI"
  ```
- **Library:**  
  Import in code:
  ```ts
  import { myCommand } from "cli-lib-tmp";
  myCommand("Hello programmatically");
  ```

- **Astro UI Example:**  
  See `examples/astro-ui/` for usage in an Astro app.
  ```sh
  cd examples/astro-ui/
  pnpm i 
  pnpm dev 
  ```

  Observe the output in the editor dev console because the library code is called server side in this example.

  ## Explanation

  This is simply a template for building further CLI and Library tools so I don't have to configure my package.json, tsconfig, etc. each time.

  In order to use clone the repo and delete the .git directory. As well you'll need to modify the information inside the package.json file for version, package name, author name, etc.
