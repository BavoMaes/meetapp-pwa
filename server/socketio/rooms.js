const joinChatRooms = async (socket, matches) => {
  try {
    matches.map(match => {
      socket.join(String(match._id)); 
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  joinChatRooms: joinChatRooms
}