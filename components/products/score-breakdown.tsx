import { Product } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SCORING_STRATEGIES } from "@/lib/scoring";

interface ScoreBreakdownProps {
    product: Product;
}

export function ScoreBreakdown({ product }: ScoreBreakdownProps) {
    const { score } = product;

    const indicators = [
        { name: "Performance", value: score.performance, weight: 0.30 },
        { name: "Adoption", value: score.adoption, weight: 0.25 },
        { name: "Value/Price", value: score.valuePrice, weight: 0.20 },
        { name: "Reliability", value: score.reliability, weight: 0.15 },
        { name: "Accessibility", value: score.accessibility, weight: 0.10 },
    ];

    return (
        <Card className="rounded-card">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>Score Breakdown</span>
                    <Badge className="bg-foreground text-background rounded-full text-lg px-4 py-2">
                        {score.final}/100
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {indicators.map((indicator) => (
                    <div key={indicator.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{indicator.name}</span>
                                <span className="text-xs text-muted-foreground">
                                    ({Math.round(indicator.weight * 100)}% weight)
                                </span>
                            </div>
                            <span className="font-semibold">{indicator.value}/100</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                                className="h-full bg-foreground transition-all"
                                style={{ width: `${indicator.value}%` }}
                            />
                        </div>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground">
                            {SCORING_STRATEGIES.find((s) => s.name === indicator.name)?.description}
                        </p>
                    </div>
                ))}

                {/* Calculation Explanation */}
                <div className="mt-6 rounded-lg bg-secondary p-4">
                    <h4 className="text-sm font-medium mb-2">How we calculate the score</h4>
                    <p className="text-xs text-muted-foreground">
                        Final score = (Performance × 30%) + (Adoption × 25%) + (Value/Price × 20%) +
                        (Reliability × 15%) + (Accessibility × 10%)
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
