type Node<T> = {
    value: T;
    next: Node<T> | null;
};

export default class SinglyLinkedList<T> {
    public length: number = 0;
    private head: Node<T> | null = null;

    constructor() {}

    private createNode<T>(value: T, next: Node<T> | null = null): Node<T> {
        return {
            value,
            next,
        };
    }

    private findNode(idx: number): {
        prev: Node<T> | null;
        current: Node<T> | null;
        next: Node<T> | null;
    } {
        let index = 0;
        let prev = null;
        let current = this.head;

        while (idx > index && current) {
            prev = current;
            current = current.next;
            index += 1;
        }

        return {
            prev,
            current,
            next: current?.next || null,
        };
    }

    get(idx: number): T | undefined {
        return this.findNode(idx).current?.value;
    }

    prepend(item: T): void {
        this.head = this.createNode(item, this.head);
        this.length += 1;
    }

    append(item: T): void {
        if (!this.length) {
            this.head = this.createNode(item);
            this.length += 1;

            return;
        }

        const lastNode = this.findNode(this.length - 1).current as Node<T>;
        lastNode.next = this.createNode(item);
        this.length += 1;
    }

    insertAt(item: T, idx: number): T | void {
        if (idx <= 0 || idx >= this.length) {
            return;
        }

        const { prev, current } = this.findNode(idx);

        const node = this.createNode(item, current);

        if (prev) {
            prev.next = node;
        }

        this.length += 1;

        return node.value;
    }

    remove(item: T): T | undefined {
        let prev = null;
        let current = this.head;

        while (current) {
            if (current.value === item) {
                break;
            }

            prev = current;
            current = current.next;
        }

        if (!current) {
            return;
        }

        if (prev) {
            prev.next = current.next;
        } else {
            this.head = current.next || null;
        }

        this.length -= 1;

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        const { prev, current, next } = this.findNode(idx);

        if (!current) {
            return;
        }

        if (prev) {
            prev.next = next;
        } else {
            this.head = next;
        }

        this.length -= 1;
        return current.value;
    }
}
