class ResBody {
  status = 500;
  success = false;
  data = null;
  constructor(status: number, success: boolean, data: any) {
    this.status = status;
    this.success = success;
    this.data = data;
  }
}

export default ResBody;
