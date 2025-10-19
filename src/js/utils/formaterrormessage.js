export function formatErrorMessage(rawError) {
  if (!rawError) return "No errors.";

  const lines = rawError.split("\n").filter(line => line.trim() !== "");

  let formatted = "";
  for (let line of lines) {
    // Detect filename + line number
    const match = line.match(/(.):(\d+):(\d+): (error|warning): (.)/);
    if (match) {
      const [, file, lineNum, colNum, type, message] = match;
      formatted += `${type.toUpperCase()}:\nFile: ${file}\nLine: ${lineNum}, Column: ${colNum}\nMessage: ${message}\n\n`;
    } else {
      formatted += line + "\n";
    }
  }

  return formatted.trim();
}