import { Text as TextBase } from "../../Common/Text";
import { Definition as DefinitionBase } from "../../Common/Definition";
import { Ul as UlBase } from "../../Common/Ul";
import { Ol as OlBase } from "../../Common/Ol";
import { H2 as H2Base } from "../../Common/Headers";
import React, { ReactNode } from "react";

export interface ChunkComponent {
  content: any;
}

export interface Chunk extends ChunkComponent {
  type: string;
}

export interface IArticleRenderer {
  content: Chunk[];
}

export interface IComponents {
  Preamble: ReactNode;
  Header2: ReactNode;
  Definition: ReactNode;
  Text: ReactNode;
  UnorderedList: ReactNode;
  OrderedList: ReactNode;
}

const Preamble = ({ content }: ChunkComponent) => {
  return <TextBase italic>{content}</TextBase>;
};

const Definition = ({ content }: ChunkComponent) => {
  return <DefinitionBase termin={content.termin} essence={content.essence} />;
};

const Text = ({ content }: ChunkComponent) => {
  return <TextBase> {content}</TextBase>;
};

const Header2 = ({ content }: ChunkComponent) => {
  return <H2Base>{content}</H2Base>;
};

const UnorderedList = ({ content }: ChunkComponent) => {
  return <UlBase list={content} />;
};

const OrderedList = ({ content }: ChunkComponent) => {
  return <OlBase list={content} />;
};

const Components: IComponents = {
  Preamble,
  Header2,
  Definition,
  Text,
  UnorderedList,
  OrderedList,
};

export const ArticleRenderer = ({ content }: IArticleRenderer) => {
  return (
    <>
      {content.map((chunk) =>
        React.createElement(Components[chunk.type], { content: chunk.content })
      )}
    </>
  );
};
