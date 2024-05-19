import { usePageStyles } from '@/styles';

export const Stock = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        This is the Stock page within the microfrontend Dashboard
      </p>
    </div>
  );
};
