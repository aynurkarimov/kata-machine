type Node<T> = {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
};

export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    constructor() {}

    private createNode(
        value: T,
        prev: Node<T> | null = null,
        next: Node<T> | null = null,
    ) {
        return {
            value,
            prev,
            next,
        };
    }

    private findNode(idx: number): Node<T> | null {
        if (idx < 0 || idx >= this.length) {
            return null;
        }

        const isTraversingFromHead = this.length / 2 > idx;

        if (isTraversingFromHead) {
            let current = this.head;
            let step = 0;

            while (idx > step) {
                if (current?.next) {
                    current = current?.next;
                }

                step += 1;
            }

            return current;
        } else {
            let current = this.tail;
            let step = this.length - 1;

            while (idx < step) {
                if (current?.prev) {
                    current = current.prev;
                }

                step -= 1;
            }

            return current;
        }
    }

    private deleteNode(node: Node<T> | null): Node<T> | undefined {
        if (!node) {
            return undefined;
        }

        const { prev, next } = node;

        if (prev) {
            prev.next = next;
        } else {
            this.head = next;
        }

        if (next) {
            next.prev = prev;
        } else {
            this.tail = prev;
        }

        this.length -= 1;

        return node;
    }

    prepend(item: T): void {
        const node = this.createNode(item, null, this.head);

        if (this.head) {
            this.head.prev = node;
        }

        if (!this.length) {
            this.tail = node;
        }

        this.head = node;
        this.length += 1;
    }

    append(item: T): void {
        const node = this.createNode(item, this.tail);

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.length) {
            this.head = node;
        }

        this.tail = node;
        this.length += 1;
    }

    get(idx: number): T | undefined {
        return this.findNode(idx)?.value;
    }

    remove(item: T): T | undefined {
        let current = this.head;

        while (current) {
            if (current.value === item) {
                break;
            } else {
                current = current.next;
            }
        }

        return this.deleteNode(current)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.findNode(idx);

        return this.deleteNode(node)?.value;
    }

    insertAt(item: T, idx: number): T | undefined {
        if (idx <= 0 || idx >= this.length) {
            return undefined;
        }

        const current = this.findNode(idx);

        // Here's a bug while inserting into the end of LL.
        // idx >= this.length
        if (!current) {
            return undefined;
        }

        const { prev } = current;

        const node = this.createNode(item, prev, current);
        this.length += 1;

        if (!prev) {
            this.head = node;
        } else {
            prev.next = node;
        }

        current.prev = node;

        return node?.value;
    }
}
