export function detectFramework(code: string) {
  const trimmed = code.trim();

  if (
    trimmed.includes("@Component") ||
    trimmed.includes("*ngIf") ||
    trimmed.includes("[(ngModel)]")
  ) {
    return "angular";
  }

  if (
    trimmed.includes("v-if") ||
    trimmed.includes("v-for") ||
    trimmed.includes("<template>")
  ) {
    return "vue";
  }

  if (trimmed.includes("class=") && trimmed.match(/btn-|container|row|col-/)) {
    return "bootstrap";
  }

  if (
    trimmed.includes("className=") ||
    trimmed.includes("useState") ||
    trimmed.includes("useEffect") ||
    trimmed.includes("return (")
  ) {
    return "react";
  }

  return "unknown";
}
