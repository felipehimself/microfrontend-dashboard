import { Field, ProgressBar } from '@fluentui/react-components';

export const Fallback = () => {
  return (
    <Field validationMessage="Loading page" validationState="none">
      <ProgressBar />
    </Field>
  );
};
