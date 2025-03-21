
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
                description: 'campañas medicas, atención visual, programas de salud integrales'
            },
            {
                icon: './educacion.jpeg',
                title: 'Educacion',
                description: 'Becas, capacitacion, equipamento escolar'
            },
            {
                icon: './deportes.jpeg',
                title: 'Deportes',
                description: 'Actividades recreativas para ninos y jovenes'
            },
            
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
           
        ]
    }
};
