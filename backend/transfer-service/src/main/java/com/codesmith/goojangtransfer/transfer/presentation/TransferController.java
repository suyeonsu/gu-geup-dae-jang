package com.codesmith.goojangtransfer.transfer.presentation;

import com.codesmith.goojangtransfer.global.passport.MemberInfo;
import com.codesmith.goojangtransfer.global.passport.presentation.AuthMember;
import com.codesmith.goojangtransfer.infra.kafka.TransferProducer;
import com.codesmith.goojangtransfer.transfer.application.TransferService;
import com.codesmith.goojangtransfer.transfer.dto.request.TransferCreateRequest;
import com.codesmith.goojangtransfer.transfer.dto.response.MeetingJoinResponse;
import com.codesmith.goojangtransfer.transfer.dto.request.TransferHistoryRequest;
import com.codesmith.goojangtransfer.transfer.dto.response.*;
import com.codesmith.goojangtransfer.transfer.persistence.TransferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transfer")
@RequiredArgsConstructor
public class TransferController {

    private final TransferService transferService;
    private final TransferRepository transferRepository;
    private final TransferProducer transferProducer;

    @PostMapping
    public ResponseEntity<TransferCreateResponse> createTransfer(@RequestBody TransferCreateRequest transferCreateRequest) {
        return ResponseEntity.ok(transferService.createTransfer(transferCreateRequest));
    }

    @PutMapping("/{transferId}")
    public ResponseEntity<TransferStatusChangeResponse> completeTransfer(@PathVariable Long transferId) {
        return ResponseEntity.ok(transferService.completeTransfer(transferId));
    }

    @DeleteMapping("/{transferId}")
    public ResponseEntity<TransferStatusChangeResponse> cancelTransfer(@PathVariable Long transferId) {
        return ResponseEntity.ok(transferService.cancelTransfer(transferId));
    }

    @GetMapping("/member/{memberId}")
    public ResponseEntity<List<TransferListResponse>> getTransferByMember(@PathVariable Long memberId) {
        return ResponseEntity.ok(transferService.getTransferByMember(memberId));
    }

    @PostMapping("/meeting/{transferId}")
    public ResponseEntity<MeetingJoinResponse> joinMeetingByTransferId(@AuthMember MemberInfo memberInfo, @PathVariable Long transferId) {
        return ResponseEntity.ok(transferService.joinMeeting(memberInfo.getId(), transferId));
    }

    @DeleteMapping("/meeting/{transferId}")
    public ResponseEntity<Void> deleteMeetingByTransferId(@PathVariable Long transferId) {
        transferService.deleteMeeting(transferId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/history")
    public ResponseEntity<List<TransferHistoryResponse>> getTransferHistoryList(@AuthMember MemberInfo memberInfo, @ModelAttribute TransferHistoryRequest transferHistoryRequest) {
        return ResponseEntity.ok(transferService.getTransferHistoryList(memberInfo.getId(), transferHistoryRequest));
    }

    // TODO: 삭제 예정
    @GetMapping("/kafka")
    public ResponseEntity<String> kfk() {
        transferRepository.findById(100L);
        transferProducer.sendTransferMessage(transferRepository.findById(10L).get());

        return ResponseEntity.ok("dd");
    }
}