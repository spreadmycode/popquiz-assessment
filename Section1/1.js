// Algorithm:
// 1) If the list is empty or has only one node, return the list.
// 2) Divide the list into two halves using the slow and fast pointer technique.
// 3) Sort each half recursively by calling the sort list function on each half.
// 4) Merge the two sorted halves into a single sorted list by creating a new dummy node as the head of the merged list.
// 5) Iteratively comparing and adding nodes from the two halves.
// 5) Return the next node of the dummy head.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function sortList(head) {
  if (!head || !head.next) {
    return head;
  }

  // Divide the list into two halves
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow.next;
  slow.next = null;

  // Sort each half recursively
  const left = sortList(head);
  const right = sortList(mid);

  // Merge the two sorted halves
  const dummy = new ListNode();
  let curr = dummy;
  while (left && right) {
    if (left.val < right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }
    curr = curr.next;
  }
  curr.next = left || right;

  return dummy.next;
}
