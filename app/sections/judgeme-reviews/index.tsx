import type {
  HydrogenComponentSchema
} from "@weaverse/hydrogen";
import { forwardRef } from "react";
import { Section, layoutInputs } from "~/components/section";

let JudgemeReviewSection = forwardRef<HTMLElement, any>((props, ref) => {
  let { children, loaderData, ...rest } = props;
  return (
    <Section ref={ref} {...rest} overflow="unset">
        {children}
    </Section>
  );
});

export default JudgemeReviewSection;

export let schema: HydrogenComponentSchema = {
  type: "judgeme-reviews",
  title: "Judgeme Reviews",
  inspector: [
    {
      group: "Layout",
      inputs: layoutInputs.filter((inp) => inp.name !== "borderRadius"),
    },
  ],
  childTypes: [
    "heading",
    "judgeme-review--index",
  ],
  presets: {
    children: [
      {
        type: "heading",
        Content: "Reviews",
      },
      {
        type: "judgeme-review--index",
      },
    ],
  },
};
