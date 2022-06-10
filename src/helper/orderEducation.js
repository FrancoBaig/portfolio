function orderEducation(list) {
    const currents = list.filter((e) => e.isCurrent);
    const olds = list.filter((e) => !e.isCurrent);

    return [...currents, ...olds];
}

export default orderEducation;
