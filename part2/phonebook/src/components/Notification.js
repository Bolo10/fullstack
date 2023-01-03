export const Notification = ({ message, notifyClass }) => {
    if (message === null) {
      return null
    }
    console.log(notifyClass)
    return (
      <div className={notifyClass}>
        {message}
      </div>
    )
  }
