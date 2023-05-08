export const translateErrorMessage = (message: any) => {
  switch (message) {
    case "Incorrect password":
      return "Senha incorreta";
    case "Cannot find user":
      return "Usuário não encontrado";
    default:
      return "Erro desconhecido";
    case "Email already exists":
      return "E-mail já cadastrado";
  }
};
