"use client";
import { motion } from "framer-motion";
import { FadeInSection } from "./FadeInSection";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full text-left  flex justify-center"
    >
      <div className="w-full text-left p-10 ">
        <FadeInSection>
          <h1 className="text-4xl  font-bold my-10 ">O que é o CEP?</h1>

          <p className="text-2xl max-w-2xl ">
            "CEP" é a sigla para Código de Endereçamento Postal, um conjunto de
            oito números que identifica localidades, edifícios, empresas, órgãos
            públicos, serviços e unidades dos Correios.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h1 className="text-4xl my-10 font-bold">
            {" "}
            Como localizar um endereço?
          </h1>
          <p className="text-2xl max-w-2xl">
            Primeiramente, deve-se utilizar o campo de pesquisa acima, o qual
            fornece opções de busca, como o{" "}
            <strong> código CEP, nome da cidade, endereço ou rua.</strong>
          </p>

          <p className=" text-2xl max-w-2xl mt-7">
            O CEP deve conter exatamente <strong>8 dígitos numéricos</strong>,
            podendo ser digitado com ou sem o traço{" "}
            <strong>(Ex: 12345678 ou 12345-678)</strong>. Não utilize espaços,
            pontos ou outros caracteres especiais.
          </p>

          <FadeInSection>
            <h1 className="text-4xl my-10 font-bold">
              Como é estruturado o CEP?
            </h1>
            <p className="text-2xl max-w-2xl">
              O Código de Endereçamento Postal (CEP) é composto por oito dígitos
              numéricos. Os cinco primeiros indicam a região, sub-região e
              setor, enquanto os três últimos identificam a entrega dentro
              daquela área.
            </p>
            <p className="text-2xl max-w-2xl mt-6">
              Por exemplo, no CEP <strong>12345-678</strong>:
              <br />
              <strong>123</strong> representa a região geográfica,{" "}
              <strong>45</strong> a sub-região e <strong>678</strong> o local
              exato da entrega.
            </p>
          </FadeInSection>
        </FadeInSection>

        <FadeInSection>
          <h1 className="text-4xl my-10 font-bold">Você sabia?</h1>
          <p className="text-2xl max-w-2xl">
            O sistema de CEPs foi criado no Brasil em <strong>1971</strong>{" "}
            pelos Correios, com o objetivo de organizar e agilizar a entrega de
            correspondências em todo o país.
          </p>
          <p className="text-2xl max-w-2xl mt-6">
            Atualmente, existem milhões de CEPs cadastrados, cobrindo todos os
            municípios, bairros e até edifícios comerciais em grandes cidades.
          </p>
        </FadeInSection>
        <FadeInSection>
          <p className="text-2xl  max-w-2xl"> </p>
          <h1 className="text-4xl my-10 font-bold">Sobre o site</h1>
          <p className="text-2xl  max-w-2xl">
            Este site foi criado com o intuito de facilitar a busca de endereços
            de forma rápida e prática, utilizando uma interface simples e
            intuitiva, a qual permite o usuário buscar informações sobre ruas,
            bairros, cidades e estados.
          </p>
        </FadeInSection>
      </div>
    </motion.div>
  );
}
