export const formatPhone = (phoneNumber: string | undefined) => {
  if (!phoneNumber) return null;
  const newArr: string[] = phoneNumber.split("");
  newArr.splice(3, 0, "-");
  newArr.splice(7, 0, "-");
  return newArr.join("");
};

export function convertDateToString(date: number) {
  let today = new Date(date);
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const generatedDate = `${yyyy}-${mm}-${dd}`;
  return `${generatedDate}`;
}
