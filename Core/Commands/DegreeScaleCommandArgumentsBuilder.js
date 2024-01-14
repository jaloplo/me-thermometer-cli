function DegreeScaleCommandArgumentsBuilder() {
    
    const instance = {
        name: '',
        description: '',
        action: () => null
    };

    const that = {

        build: (name) => {
            instance.name = name;
        },

        get: () => instance,

        setAction: (action) => instance.action = action,
        setDescription: (description) => instance.description = description,
        setName: (name) => instance.name = name,
    };

    return that;
}

module.exports = DegreeScaleCommandArgumentsBuilder;