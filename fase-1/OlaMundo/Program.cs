// See https://aka.ms/new-console-template for more information
var today = "08/08/2022";
Console.Write("Insira a sua idade: ");
var texto = Console.ReadLine();
var age = Convert.ToInt32(texto);
Console.WriteLine($"Olá Mundo! Meu primeiro código {today}");
Console.WriteLine($"Hoje é {DateTime.Now}");
//File.WriteAllText("C:\\Users\\Crmall\\Desktop\\Mentoria\\teste.txt","oicarol");
//crtl+k+c=comentar
//crtl+k+u=descomentar
var maiorDeIdade = age >= 18; //true ou false
if (maiorDeIdade)
{
    Console.WriteLine("pode entrar na balada");

}
else
{
    Console.WriteLine("não pode entrar na balada");
}
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"contando {i}");
}