import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2e6',
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 15,
    flex: 9,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#663300',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: '#663300',
    padding: 5,
    marginBottom: 10,
  },
  taskContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },

  noneTask: {
    fontSize: 22,
    textAlign: 'center',
    color: '#663300',
  },
  inputField: {
    flex: 1,
    justifyContent: 'center',
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputText: {
    paddingHorizontal: 20,
    width: 250,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#663300',
  },
  addText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
    textAlign: 'center',
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#663300',
    borderRadius: 75,
  },
  deleteButton: {
    height: 30,
    width: 30,
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff4444',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ff9999',
  },
  taskItem: {
    flex: 1,
    padding: 15,
    borderRadius: 20,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.3,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  todoIndex: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: '#ff8080',
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 2,
  },
  cross: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
