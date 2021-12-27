import { ReactNode } from "react";

type TitleProps = {
	children: ReactNode
}

const Title = ({ children }: TitleProps) => {
	return (<h3>{children}</h3>);
}

export default Title;

