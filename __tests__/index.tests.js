const flatTranslation = require('../flatTranslation');

describe('', () => {
    test('flat empty object', () => {
        const translation = {};
        expect(flatTranslation(translation)).toEqual(translation)
    });
    
    test('do not touch already flatten translations', () => {
        const translation = {
            some_property: 'some value'
        };
        expect(flatTranslation(translation)).toEqual(translation);
    });

    test('flat level 1', () => {
        const translation = {
            some_property: 'some value',
            not_flat: {
                not_flat_in: 'bleble',
            },
            notFlat2: {
                not_flat_in_2: 'dscxz',
            }
        };

        expect(flatTranslation(translation)).toEqual({
            some_property: 'some value',
            not_flat_not_flat_in: 'bleble',
            notFlat2_not_flat_in_2: 'dscxz'
        });
    });

    test('flat level 2', () => {
        const translation = {
            some_property: 'some value',
            not_flat: {
                not_flat_in: 'bleble',
            },
            not_flat_2: {
                not_flat_in: {
                    ble: 'asbc'
                }
            }
        };

        expect(flatTranslation(translation)).toEqual({
            some_property: 'some value',
            not_flat_not_flat_in: 'bleble',
            not_flat_2_not_flat_in_ble: 'asbc'
        });
    });

    test('flat level 3', () => {
        const translation = {
            not_flat_2: {
                not_flat_in: {
                    ble: {
                        'dsadas': 'really deep xd'
                    }
                }
            }
        };

        expect(flatTranslation(translation)).toEqual({
            not_flat_2_not_flat_in_ble_dsadas: 'really deep xd'
        });
    });
})
