// After the jsconfig.json includes the files
// from project_a in its codebase (compilerOptions.includes)
// MyComponent from feature1 is up for import again

// Note that this highly makes sense
// But the two preceding steps are very confusing
import { MyComponent } from "@feature1/f1";

class MyComponent2 extends MyComponent {}
