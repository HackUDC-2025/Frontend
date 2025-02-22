import { ProfileConfig } from "./profile.interface";

export const researcherProfile:ProfileConfig = {
    name: "researcher",
    technicalLevel: "alto",
    languageStyle: 'formal',
    maxTokens: 500,
    specialInstructions: "Este perfil es para el nivel de un investigador, por lo que se espera que el texto generado sea formal y detallado.",
};