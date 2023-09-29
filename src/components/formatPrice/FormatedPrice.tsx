import { AmountPriceProps } from "../../../types/type"

const FormattedPrice = ({ amount }: AmountPriceProps) => {
    const formattedAmount = new Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });
    return <span>{formattedAmount}</span>;
  };
  
  export default FormattedPrice;
