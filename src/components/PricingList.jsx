import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-[0.5rem] md:gap-[1rem]">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-full h-full px-1 md:px-6 bg-n-8 border border-n-6 rounded-xl md:rounded-[2rem] lg:w-auto even:py-8 md:even:py-14 odd:py-4 md:odd:py-8 odd:my-2 md:odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h6 md:h4 mb-2 md:mb-4">{item.title}</h4>

          <p className="body-2 text-[10px] md:text-base min-h-[3rem] md:min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[3rem] md:h-[5.5rem] mb-4 md:mb-6">
            {item.price && (
              <>
                <div className="h4 md:h3">$</div>
                <div className="text-[2rem] md:text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-4 md:mb-6 text-[8px] md:text-xs"
            px="px-1 md:px-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-2 md:py-5 border-t border-n-6"
              >
                <img src={check} width={16} height={16} className="md:w-6 md:h-6" alt="Check" />
                <p className="body-2 text-[10px] md:text-base ml-2 md:ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
