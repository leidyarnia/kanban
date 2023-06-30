import  { ReactNode } from "react";
import { H1 } from "../styles/styled-components";
import { Card } from "../Types/cards";

type Props = {
  title: string;
  children?: ReactNode;
  onAddCard?: (card: Card) => void;
};


export default function Column({ title, children }: Props) {
  return (
    <div className="column">
      <H1>{title}</H1>
           {children}
    </div>
  );
}