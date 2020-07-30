// Create a new document in the database

const createDocument = async (model, document) => {
  try {
    const response = await model.create(document);
    if (!response) {
      throw new Error('Invalid data provided');
    }
    return response;
  } catch (error) {
    throw error;
  }
}

// Find an existing document in the database using the ID

const findDocumentById = async (model, document) => {
  try {
    const response = await model.findById(document.id).exec();
    if (!response) {
      throw new Error('No valid document found for the given ID');
    }
    return response;
  } catch (error) {
    throw error;
  }
}

// Update an existing document in the database

const updateDocument = async (model, document) => {
  try {
    const response = await model.findByIdAndUpdate(
      document.id,
      { $set: document },
      { runValidators: true, new: true}
    );
    if (!response) {
      throw new Error('No valid document found for the given ID')
    }
    return response;
  } catch (error) {
    throw error;
  }
}

// Delete an existing document in the database

const deleteDocument = async (model, document) => {
  try {
    const response = await model.deleteOne({ _id: document.id});
    if (response.deletedCount < 1) {
      throw new Error('Failed to delete document');
    }
    return true;
  } catch (error) {
    throw error
  }
}

module.exports = {
  create: createDocument,
  findById: findDocumentById,
  update: updateDocument,
  delete: deleteDocument
}
