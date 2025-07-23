// Interfaz que representa los datos del formulario con propiedades opcionales
export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export const formSelectors: Record<keyof FormData, string> = {
  firstName: "#firstName",
  lastName: "#lastName",
  email: "#userEmail",
  phone: "#userNumber",
};

export const url: string = "https://demoqa.com/automation-practice-form";
