import styled from "styled-components";

const CardContainer = styled.div<{ disabled?: boolean }>`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: ${({ disabled }) => ( disabled ? 'not-allowed' : 'pointer' )};
  opacity: ${({ disabled }) => ( disabled ? 0.5 : 1.0 )};
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const CardFooter = styled.div`
  padding: 8px 16px;
  background-color: #f7f7f7;
  text-align; right;
  font-size: 0.9rem;
`;

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  footer?: string;
  disabled?: boolean;
}


export const Card = ({
  title,
  description,
  image,
  footer,
  disabled = false
}: CardProps) => {
  return (
    <CardContainer disabled={disabled}>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};
