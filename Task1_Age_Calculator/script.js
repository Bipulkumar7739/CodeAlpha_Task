function calculateAge()
{
  const dobInput = document.getElementById("dob").value;
  const output = document.getElementById("output");

  if (!dobInput)
  {
    output.textContent = " Please select your birth date.";
    return;
  }
  const today = new Date();
  const birthDate = new Date(dobInput);
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0)
  {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0)
  {
    years -= 1;
    months += 12;
  }

  if (years < 0)
  {
    output.textContent = "Invalid Date! Future dates are not allowed.";
  }
  else
  {
    output.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
  }
}
