import BaseModel from '../../../../utils/BaseModel';

class User extends BaseModel {
  constructor(props) {
    super();
    this.data = {
      id: props.id,
      email: props.email,
    };
  }

  get id() {
    return this.data.id;
  }

  get email() {
    return this.data.email;
  }

  set email(value) {
    this.data.email = value;
  }
}

export default User;
