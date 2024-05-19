import { usePageStyles } from '@/styles';

export const Sales = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        This is the Sales page within the microfrontend Dashboard
      </p>
    </div>
  );
};
