import tw from 'twin.macro';

// MAIN INDENTATION
export const Indent = tw.div`px-10`;

// BOX INDENTATION
export const BoxIndent = tw.div`p-10`;

// SECTION WITH INDENTATION
export const SectionWrapper = tw(
  Indent
)`flex flex-col items-start justify-center py-10`;

export default Indent;
