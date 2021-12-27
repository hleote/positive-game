import { ReactNode } from "react";

type SubTitleProps = {
	children: ReactNode
}

const SubTitle = ({ children }: SubTitleProps) => {
	return (<h4>{children}</h4>);
}

export default SubTitle;

