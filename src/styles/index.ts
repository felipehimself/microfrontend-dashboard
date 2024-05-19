import { makeStyles, typographyStyles } from '@fluentui/react-components';

export const usePageStyles = makeStyles({
  div: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: typographyStyles.body2,
});

// const baseRoot = {
//   display: 'flex',
//   height: '100vh',
//   backgroundColor: '#fff',
// };
// export const useNavStyles = makeStyles({
//   root: {
//     ...baseRoot,
//   },

//   rootSm: {
//     ...baseRoot,
//     width: '3.6rem',
//   },

//   content: {
//     ...shorthands.flex(1),
//     ...shorthands.padding('16px'),

//     display: 'grid',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     gridRowGap: tokens.spacingVerticalXXL,
//     gridAutoRows: 'max-content',
//   },
//   field: {
//     display: 'grid',
//     gridRowGap: tokens.spacingVerticalS,
//   },

//   headingContent: {
//     marginInlineStart: `10px`,
//   },
//   hamburger: {
//     color: tokens.colorNeutralForeground2,
//     textDecorationLine: 'none',
//   },

//   noHover: {
//     ':hover': {
//       backgroundColor: 'transparent',
//     },
//   },

//   withHover: {
//     ':hover': {
//       backgroundColor: '#fff',
//     },
//   },
// });
