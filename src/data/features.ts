
// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: './salud.jpeg',
                title: 'Salud',
                description: 'Con proyectos y programas en diversos campos de la salud y bienestar'
            },
            {
                icon: './educacion.jpeg',
                title: 'Educacion',
                description: 'Generamos espacios de capacitación, educación y potenciamiento de habilidades'
            },
            {
                icon: './deportes.jpeg',
                title: 'Deportes',
                description: 'Complementamos nuestros programas incentivando y apoyando a la formación de  atletas comunitarios'
            },
            
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
           
        ]
    }
};
