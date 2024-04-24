import Router from "next/router";
import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/molecules/InputText";
import { Link } from "../../components/molecules/Link";
import { SidebarHero } from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";

export const Login = () => {

  
  const handleNavigateToAddNewExpanse = () => {
    Router.push("/dashboard");
  };
  
  return (
    <TemplateContainer>
      <TemplateContent>
        <SidebarHero />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Acesse sua conta</h1>
          <form className="flex flex-col w-full gap-4 max-w-xs">
            <InputText label="email" type="email" />
            <InputText label="senha" type="password" />
            <Link href="/dashboard">
              <Button>Entrar</Button>
            </Link>
          </form>
          <Link href="/register">Criar Conta</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};
