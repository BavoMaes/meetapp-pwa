module.exports = (Model) => {
    this.create = async (model) => {
        try {
            let data = await Model.create(model);
            if (data) {
                return data;
            } else {
                throw new Error('Invalid data');
            }
        } catch (error) {
            throw error;
        }
    };

    return {
        create: this.create
    }
}
