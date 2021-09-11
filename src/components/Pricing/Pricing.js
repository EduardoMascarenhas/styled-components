import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Preços</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Básico</PricingCardPlan>
                <PricingCardCost>R$ 99,99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Novos Usuários</PricingCardFeature>
                  <PricingCardFeature>
                    R$ 10.000,00 Orçamento
                  </PricingCardFeature>
                  <PricingCardFeature>Análise das métricas</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Premium</PricingCardPlan>
                <PricingCardCost>R$ 299,99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 Novos Usuários</PricingCardFeature>
                  <PricingCardFeature>
                    R$ 50.000,00 Orçamento
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Análise das métricas com alertas
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamante</PricingCardPlan>
                <PricingCardCost>R$ 999,99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Usuários Ilimitados</PricingCardFeature>
                  <PricingCardFeature>Orçamento Ilimitado</PricingCardFeature>
                  <PricingCardFeature>
                    Análise das métricas com alerta
                  </PricingCardFeature>
                  <PricingCardFeature>Atendimento 24h</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
