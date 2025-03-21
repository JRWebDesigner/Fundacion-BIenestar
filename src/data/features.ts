import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

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
                icon: Smile,
                title: 'Salud',
                description: 'campañas medicas, atencion visual, vacunaciones'
            },
            {
                icon: Shield,
                title: 'Educacion',
                description: 'Becas, capacitacion, equipamento escolar'
            },
            {
                icon: Zap,
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
