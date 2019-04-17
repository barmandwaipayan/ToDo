import { getInputRangeFromIndexes } from 'react-native-snap-carousel';

export function scrollInterpolator(index, carouselProps) {
    const range = [2, 1, 0, -1, -2];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}

export function animatedStyles(index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
        zIndex: carouselProps.data.length - index,
        transform: [
        {
            [translateProp]: animatedValue.interpolate({
                inputRange: [-2, -1, 0, 1, 2],
                outputRange: [
                    sizeRef * 2,
                    sizeRef * 0.85,
                    0,
                    -sizeRef * 0.1,
                    -sizeRef * 2
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}