<?php

namespace Dtn\Knockout\Controller\Employee;

use Magento\Framework\View\Element\Messages;

class Create extends \Magento\Framework\App\Action\Action
{
    /**
     * @var \Magento\Framework\View\Result\PageFactory
     */
    protected $_pageFactory;

    /**
     * @var \Dtn\Knockout\Model\EmployeeFactory
     */
    protected $employeeFactory;

    /**
     * Create constructor.
     * @param \Magento\Framework\App\Action\Context $context
     * @param \Magento\Framework\View\Result\PageFactory $pageFactory
     * @param \Dtn\Knockout\Model\EmployeeFactory $employeeFactory
     */
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $pageFactory,
        \Dtn\Knockout\Model\EmployeeFactory $employeeFactory
    )
    {
        $this->_pageFactory = $pageFactory;
        $this->employeeFactory = $employeeFactory;
        return parent::__construct($context);
    }

    public function execute()
    {
        // get data post
        $data = $this->getRequest()->getParams();

        // save data
        if (!empty($data)) {
            $employee = $this->employeeFactory->create();
            try {
                $save = $employee->setData($data)->save();
            } catch (\Exception $e) {
            }
             return $this->_redirect('knockout/employee');
        }
    }
}
