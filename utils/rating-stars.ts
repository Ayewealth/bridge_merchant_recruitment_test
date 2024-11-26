export const ratingStar = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push('star');
    } else {
      stars.push('staro');
    }
  }
  return stars;
};
