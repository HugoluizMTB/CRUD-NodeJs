export class AppError {
  constructor(
    public message: string,
    public staus: number,
    public data?: any
  ) {
    this.message = message
    this.staus = staus
    this.data = data
  }
}
