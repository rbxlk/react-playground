import { Avatar } from "./Avatar";

function Card({ children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}
export function Profile(props) {
    return (
        <Card>
            <Avatar {...props} />
        </Card>
    );
  }