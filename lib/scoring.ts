import type { Product } from "./mock-data";

// Stratégie de scoring intelligente
// Combine plusieurs facteurs pour faire ressortir les meilleurs produits

export interface ScoringStrategy {
    name: string;
    description: string;
    weight: number;
}

export const SCORING_STRATEGIES: ScoringStrategy[] = [
    {
        name: "Performance",
        description: "Qualité technique et fiabilité du produit",
        weight: 0.30, // 30%
    },
    {
        name: "Adoption",
        description: "Popularité et nombre d'utilisateurs actifs",
        weight: 0.25, // 25%
    },
    {
        name: "Value/Price",
        description: "Rapport qualité-prix et retour sur investissement",
        weight: 0.20, // 20%
    },
    {
        name: "Reliability",
        description: "Stabilité, uptime et support client",
        weight: 0.15, // 15%
    },
    {
        name: "Accessibility",
        description: "Facilité d'utilisation et courbe d'apprentissage",
        weight: 0.10, // 10%
    },
];

// Calcul du score final basé sur les indicateurs
export function calculateFinalScore(indicators: {
    performance: number;
    adoption: number;
    valuePrice: number;
    reliability: number;
    accessibility: number;
}): number {
    const scores = [
        indicators.performance * SCORING_STRATEGIES[0].weight,
        indicators.adoption * SCORING_STRATEGIES[1].weight,
        indicators.valuePrice * SCORING_STRATEGIES[2].weight,
        indicators.reliability * SCORING_STRATEGIES[3].weight,
        indicators.accessibility * SCORING_STRATEGIES[4].weight,
    ];

    const final = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(final);
}

// Génère des insights basés sur les scores
export function generateInsights(product: Product): string[] {
    const insights: string[] = [];
    const { score } = product;

    // Performance insights
    if (score.performance >= 90) {
        insights.push("🚀 Performance exceptionnelle");
    } else if (score.performance >= 75) {
        insights.push("✅ Très bonnes performances");
    }

    // Adoption insights
    if (score.adoption >= 85) {
        insights.push("⭐ Très populaire auprès des utilisateurs");
    }

    // Value/Price insights
    if (score.valuePrice >= 80) {
        insights.push("💰 Excellent rapport qualité-prix");
    }

    // Reliability insights
    if (score.reliability >= 90) {
        insights.push("🛡️ Extrêmement fiable");
    }

    // Accessibility insights
    if (score.accessibility >= 85) {
        insights.push("👍 Très facile à prendre en main");
    }

    // Overall score insights
    if (score.final >= 90) {
        insights.push("🏆 Choix éditorial - Meilleur de sa catégorie");
    } else if (score.final >= 80) {
        insights.push("⭐ Fortement recommandé");
    }

    return insights;
}

// Détermine le niveau de recommandation
export function getRecommendationLevel(score: number): {
    label: string;
    color: string;
    description: string;
} {
    if (score >= 90) {
        return {
            label: "Excellent",
            color: "text-green-600 bg-green-50",
            description: "Meilleur choix dans sa catégorie",
        };
    } else if (score >= 80) {
        return {
            label: "Très bon",
            color: "text-blue-600 bg-blue-50",
            description: "Fortement recommandé",
        };
    } else if (score >= 70) {
        return {
            label: "Bon",
            color: "text-yellow-600 bg-yellow-50",
            description: "Bon rapport qualité-prix",
        };
    } else {
        return {
            label: "Correct",
            color: "text-gray-600 bg-gray-50",
            description: "Option viable",
        };
    }
}
