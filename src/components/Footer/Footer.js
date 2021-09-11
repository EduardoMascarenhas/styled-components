import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Junte-se à nossa comunidade e fique por dentro de todas novidades!
        </FooterSubHeading>
        <FooterSubText>
          Você pode se desinscrever a qualquer momento.
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Seu Email" />
          <Button fontBig>Inscreva-se</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
            <FooterLink to="/cadastre-se">Como Funciona</FooterLink>
            <FooterLink to="/">Clientes</FooterLink>
            <FooterLink to="/">Carreira</FooterLink>
            <FooterLink to="/">Investidores</FooterLink>
            <FooterLink to="/">Termos de Serviço</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contato</FooterLinkTitle>
            <FooterLink to="/">Contato</FooterLink>
            <FooterLink to="/">Suporte</FooterLink>
            <FooterLink to="/">Patrocinadores</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Links</FooterLinkTitle>
            <FooterLink to="/">Link 1</FooterLink>
            <FooterLink to="/">Link 2</FooterLink>
            <FooterLink to="/">Link 3</FooterLink>
            <FooterLink to="/">Link 4</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            React Styled Components
          </SocialLogo>
          <WebsiteRights>React Styled Components © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={"//www.facebook.com/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.instagram.com/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.youtube.com/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.twitter.com/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href={"//www.linkedin.com/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
