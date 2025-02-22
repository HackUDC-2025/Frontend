export interface ProfileConfig {
    name: 'child' | 'finearts' | 'researcher' | 'tourist';
    technicalLevel:'bajo' | 'medio' | 'alto';
    languageStyle: 'sencillo' | 'formal' | 'detallado';
    maxTokens: number;
    specialInstructions: string;
}
